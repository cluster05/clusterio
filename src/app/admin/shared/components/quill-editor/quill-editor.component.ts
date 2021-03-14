import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ArticlesService } from 'src/app/shared/services/articles.service';

@Component({
  selector: 'cluster-quill-editor',
  templateUrl: './quill-editor.component.html',
  styleUrls: ['./quill-editor.component.scss']
})
export class QuillEditorComponent implements OnInit {

  @Input() htmlString = '';
  @Input() viewToolbar = true;
  quillEditorRef: any;
  maxUploadFileSize = 10000000;

  modules: any;

  @Output() editorChangeEmitter = new EventEmitter<any>();

  constructor(private articleService: ArticlesService) { }

  ngOnInit(): void {

    if (this.viewToolbar) {
      this.modules = {
        syntax: true,
        toolbar: [
          ['bold', 'italic', 'underline'],        // toggled buttons
          ['blockquote', 'code-block'],
          [{ list: 'ordered' }, { list: 'bullet' }],
          [{ script: 'sub' }, { script: 'super' }],      // superscript/subscript
          [{ indent: '-1' }, { indent: '+1' }],          // outdent/indent
          [{ direction: 'rtl' }],                         // text direction
          [{ header: [1, 2, 3, false] }],
          [
            { color: ['#F87171', '#FBBF24', '#34D399', '#9CA3AF', '#60A5FA', '#818CF8', '#A78BFA', '#F472B6'] },
            { background: ['#F87171', '#FBBF24', '#34D399', '#9CA3AF', '#60A5FA', '#818CF8', '#A78BFA', '#F472B6'] }
          ],          // dropdown with defaults from theme
          [{ align: [] }],
          ['link', 'image', 'video']                         // link and image, video
        ]
      }
    } else {
      this.modules = {
        syntax: true,
        toolbar: false
      }
    }

  }

  onEditorChanged(event: any): void {
    this.editorChangeEmitter.emit(event.html);
  }

  getEditorInstance(editorInstance: any) {
    if (this.viewToolbar) {
      this.quillEditorRef = editorInstance;
      const toolbar = editorInstance.getModule('toolbar');
      toolbar.addHandler('image', this.imageHandler);
    }
  }

  imageHandler = (image: string, callback: () => {}) => {
    let input: any;
    input = <HTMLInputElement>document.getElementById('fileInputField');
    input.onchange = async () => {
      let file: File;
      file = input.files[0];
      if (/^image\//.test(file.type)) {
        if (file.size > this.maxUploadFileSize) {
          alert('Image needs to be less than 1MB');
        } else {
          const URL = await this.uplaodImage(file);
          const reader = new FileReader();
          reader.onload = () => {
            const range = this.quillEditorRef.getSelection();
            const img = '<img src="' + URL + '" />';
            this.quillEditorRef.clipboard.dangerouslyPasteHTML(range.index, img);
          };
          reader.readAsDataURL(file);
        }
      } else {
        alert('You could only upload images.');
      }
    };
    input.click();
  }

  async uplaodImage(file: File) {
    const uploadData = new FormData();
    uploadData.append('image', file);
    const result: { imageURL: string } = await this.articleService.uploadArticleImage(uploadData).toPromise();
    return result.imageURL;
  }
}
