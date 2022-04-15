import React, { Component } from 'react';

export default class SingleFileUploadComponent extends Component {

    constructor(props) {
        
        super(props)

        this.state = {
            file: null
        }
        this.fileUpload = this.fileUpload.bind(this)
        this.uploadImage = this.uploadImage.bind(this)
        
    }

    fileUpload(e) {
        this.setState({
            file: URL.createObjectURL(e.target.files[0])
        })
    }

    uploadImage(event) {
        event.preventDefault()
        console.log(this.state.file)
    }

    render() {
        let preview;
        if (this.state.file) {
            preview = <img style={{maxHeight: '150px', Maxwidth: '100%', marginBottom: '20px'}} src={this.state.file} alt='' />;
        }
        return (
            <form>
                <div className="form-group">
                    {preview}
                </div>

                <div className="form-group mb-3">
                    <input type="file" onChange={this.fileUpload} className="form-control" />
                </div>
                <button type="button" onClick={this.uploadImage} className="btn btn-secondary">Lataa kuva</button>
            </form >
        )
    }
}