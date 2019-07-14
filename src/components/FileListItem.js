import React, { Fragment } from 'react'
import FileName from './FileName';
import Time from './Time';
import Commit from './Commit';
import FileIcon from './FileIcon';


function FileListItem({ file, commit }) {
  return (
    <div className="file">
      <FileName name={file.name} /> <FileIcon />
      <Time time={file.type} />
      <Commit commit={commit.message} />
    </div>
  )
}

export default FileListItem
