import React from 'react'

export default class FileUpload extends React.Component{
    state={
        file: null
    }


    handleChange = (event) => {

        console.log("FileUpload.handleChange event.target.files ", event.target.files)

        this.setState({file: event.target.files[0]})
    }

    handleSubmit = (event) => {

        event.preventDefault()

        console.log("FileUpload.handleSubmit this.state.file", this.state.file)

    }


    render(){
        return(
            <div className="FileUpload">
                <form onSubmit={this.handleSubmit}>
                     <input onChange={this.handleChange} type="file"></input>
                     <button>Submit</button>

                 </form>
                {/* <p>File Upload</p> */}
            </div>
        )
    }


}