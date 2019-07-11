import React from 'react'
import PropTypes from 'prop-types'
import FileName from './FileName'
import Commit from './Commit'
import Time from './Time'


const FileListItem = ({ file, commit }) => {
  return (
    <div className="file">
      <FileName name={file.type} />
      <Commit message={commit.message} />
      <Time time={file.name} />
    </div>
  )
}

FileListItem.propTypes = {
  file: PropTypes.object.isRequired
}
export default FileListItem;

