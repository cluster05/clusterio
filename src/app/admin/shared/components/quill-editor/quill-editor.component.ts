import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ArticlesService } from 'src/app/shared/services/articles.service';

@Component({
  selector: 'cluster-quill-editor',
  templateUrl: './quill-editor.component.html',
  styleUrls: ['./quill-editor.component.scss']
})
export class QuillEditorComponent implements OnInit {

  @Input() htmlString = '';
  quillEditorRef: any;
  maxUploadFileSize = 10000000;
  modules = {
    syntax: true,
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
      ['blockquote', 'code-block'],

      [{ header: 1 }, { header: 2 }],               // custom button values
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ script: 'sub' }, { script: 'super' }],      // superscript/subscript
      [{ indent: '-1' }, { indent: '+1' }],          // outdent/indent
      [{ direction: 'rtl' }],                         // text direction

      [{ size: ['small', false, 'large', 'huge'] }],  // custom dropdown
      [{ header: [1, 2, 3, 4, 5, 6, false] }],

      [{ color: [] }, { background: [] }],          // dropdown with defaults from theme
      [{ font: [] }],
      [{ align: [] }],

      ['clean'],                                         // remove formatting button

      ['link', 'image', 'video']                         // link and image, video
    ]
  };

  @Output() editorChangeEmitter = new EventEmitter<any>();

  constructor(private articleService: ArticlesService) { }

  ngOnInit(): void {
  }

  onEditorChanged(event: any): void {
    this.editorChangeEmitter.emit(event.html);
  }

  getEditorInstance(editorInstance: any) {
    this.quillEditorRef = editorInstance;
    console.log(this.quillEditorRef)
    const toolbar = editorInstance.getModule('toolbar');
    toolbar.addHandler('image', this.imageHandler);
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
