import React from 'react'
import FileListItem from './FileListItem';

const FileList = ({ files }) => {
  return (
    <div>
      <p style={{ padding: '1rem' }}>{files.map(file => file.id)}</p>
      <div>{files.map(file => file.name)}</div>
    </div>
  )
}

export default FileList;