import React, { useEffect, useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';

const RTE = ({ label, name, control, defaultValue }) => {
  const editorRef = useRef(null);

  const onEditorChange = (content) => {
    control.setValue(name, content); // Update the form value when editor content changes
  };

  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.setContent(defaultValue); // Set initial content
    }
  }, [defaultValue]);

  return (
    <div className="w-full">
      {label && <label className="inline-block mb-1 pl-1">{label}</label>}
      <Editor
        apiKey={import.meta.env.VITE_TINYMCE_API_KEY}
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue={defaultValue}
        init={{
          plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate ai mentions tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss markdown',
          toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
          tinycomments_mode: 'embedded',
          tinycomments_author: 'Author name',
          mergetags_list: [
            { value: 'First.Name', title: 'First Name' },
            { value: 'Email', title: 'Email' },
          ],
        }}
        onEditorChange={onEditorChange}
      />
    </div>
  );
};

export default RTE;
