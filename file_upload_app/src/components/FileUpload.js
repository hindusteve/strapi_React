import React from 'react'
import axios from 'axios'

const calculatePercent = (value, total) => Math.round(value / total * 100)  

export default class FileUpload extends React.Component{
    state={
        file: null,
        percent: 0
    }


    handleChange = (event) => {

        console.log("FileUpload.handleChange event.target.files ", event.target.files)

        this.setState({file: event.target.files[0]})
    }

    handleSubmit = async (event) => {

        event.preventDefault()

        console.log("FileUpload.handleSubmit this.state.file", this.state.file)

        const data = new FormData()
        data.append('files', this.state.file)
        
        // send the request to strapi
        const upload_res = await axios ({
            method: 'POST',
            url: 'http://localhost:1337/upload',
            data, // equivalent to data: data
            onUploadProgress: (progress) => this.setState({percent: calculatePercent(progress.loaded, progress.total)})
        })

            console.log("FileUpload.handleSubmit.upload_res ", upload_res)
    }


    render(){
        const {percent} = this.state
        console.log("FileUpload.render percent ", percent)
        return(
            <div className="FileUpload">
                <form onSubmit={this.handleSubmit}>
                     <input onChange={this.handleChange} type="file"></input>
                     <button>Submit</button>

                 </form>

                <div className="Progress">
                    <div className="Progress_Seek" style={{width: `${percent}%`}}>

                    </div>
                </div>

            </div>
        )
    }


}