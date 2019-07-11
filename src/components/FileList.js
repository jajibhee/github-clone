import React from 'react'
import FileListItem from './FileListItem';
import PropTypes from 'prop-types';

const FileList = ({ files }) => {
  return (
    <div className="file-list">

      {files.map(file =>
        <FileListItem key={file.id} commit={file.latestCommit} file={file} />
      )}
    </div>
  )
}

FileList.propTypes = {
  files: PropTypes.array.isRequired,
}
export default FileList;