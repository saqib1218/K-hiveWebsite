import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function Editor() {
   const [content, setContent] = useState('');

   // const handleEditorChange = (event: ChangeEvent, editor: CKEditor.Editor) => {
   //    const data = editor.getData();
   //    setContent(data);
   // };

   return (
      <CKEditor

         editor={ClassicEditor}
         data="Type something..."
         onReady={editor => {
            // You can store the "editor" and use when it is needed.
            console.log('Editor is ready to use!', editor);
         }}
         onChange={(event, editor) => {
            const data = editor.getData();
            console.log({ event, editor, data });
         }}
         onBlur={(event, editor) => {
            console.log('Blur.', editor);
         }}
         onFocus={(event, editor) => {
            console.log('Focus.', editor);
         }}
      />
   );
}

export default Editor;