import React from 'react'
import FileListItem from './FileListItem';

const FileList = ({ files }) => {
  return (
    <div className="">
      {files.map(file => (
        <FileListItem key={file.id} file={file} commit={file.latestCommit} />
      ))}
    </div>
  )
}

export default FileList
