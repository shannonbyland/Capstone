import React from 'react';
  import { connect } from 'react-redux';
  import Dropzone from 'react-dropzone';
  import request from 'superagent';

  class DropZone extends React.Component {
    state = { files: [] }

    onDrop = (files) => {
      this.props.setFileUploading();
      this.setState({
        files: [ ...this.state.files, { name: files[0].name, size: files[0].size } ],
      });
      request.post('/api/imgupload/upload/')
             .attach('file', files[0])
             .end((err, res) => {
               this.props.setUrl(res.body.url);
             });
    }

    render() {
      const dropZoneStyle = {
        position: 'left',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        padding: '2.5em 0',
        background: 'rgba(0,0,0,0.5)',
        textAlign: 'center',
        color: '#fff'
      }

      return (
        <section>
          <div className="dropzone">
            <Dropzone  style={dropZoneStyle} onDrop={this.onDrop} multiple={false}>
              <p>Try dropping a file here, or click to select a file to upload.</p>
            </Dropzone>
          </div>
        </section>
      );
    }
  }

  export default connect()(DropZone);
