import React, {Component } from 'react';
import axios from 'axios';

import { 
    UploadWrapper, 
    UploadForm, 
    UploadFormInput, 
    UploadFormTextarea, 
    UploadButton, 
    Upload, 
    ImagePreview 
} from './new-dish-styles';
import '../../App';

class AddNewDish extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            imageUrl: '',
            description: '',
            imgBase64: ''
        }
    }

    onChange = (e) => {
        switch(e.target.name) {
    
            case 'imageUrl':
                const file = e.target.files[0];
                const reader = new FileReader();
                reader.onload = () => {
                    this.setState({
                        imageUrl: file,
                        imgBase64: reader.result
                    })
                };
                reader.readAsDataURL(file);
                break;
            default:
                this.setState({[e.target.name]: e.target.value})
        }
    }

    // createDishHandler = (event) => {
    //     event.preventDefault()
    //     const fd = new FormData();
    //     fd.append('name', this.state.name)
    //     fd.append('imageUrl', this.state.imageUrl, this.state.imageUrl.name)
    //     fd.append('description', this.state.description)
    //     axios.post('http://localhost:8080/add-new-dish', fd,)
    //         .then(res => {
    //              console.log(res, 'res data')
    //             this.setState({
    //                 imageUrl: res.data.imageUrl
    //             })
    //             console.log('Success Message: ' + res.data.msg + ' - Image File Name: ' + res.data.imageUrl)
    //         })          
    //         .catch(err => {
    //             console.log(err, 'error from frontend')
    //         })
    // }

    createDishHandler = (event) => {
        event.preventDefault()
        const fd = new FormData();
        fd.append('name', this.state.name)
        fd.append('imageUrl', this.state.imageUrl, this.state.imageUrl.name)
        fd.append('description', this.state.description)
        axios.post('https://otaku-catering-backend.herokuapp.com/add-new-dish', fd,)
            .then(res => {
                 console.log(res, 'res data')
                 if(res.status === 201 || 200) {
                    axios.get('http://localhost:8080/')
                    .then(res => {this.setState({
                        imageUrl: res.data.imageUrl
                      })
                      console.log('Success Message: ' + res.data.msg + ' - Image File Name: ' + res.data.imageUrl)
                       }) 
                 }         
            })                   
            .catch(err => {
                console.log(err, 'error from frontend')
            })

            this.props.history.push('/menu')
    }
   
    render () {
        return (
            <Upload>
            <UploadWrapper>
                <h1>Add New Dish</h1>
                <UploadForm onSubmit={this.createDishHandler}> 
                    <label>
                        Dish Name
                        <UploadFormInput
                            onChange={this.onChange}
                            name='name'
                            type='text'
                            placeholder='Enter Dish Name'
                            value={this.state.name}
                        />
                    </label>

                    <label>
                        Dish Image
                        < UploadFormInput img
                            onChange={this.onChange}
                            name='imageUrl'
                            type='file'
                            placeholder='Enter Dish Image'
                        />
                    </label>

                    <label>Please choose an image.</label>

                    
                    <ImagePreview src={this.state.imgBase64}/>
                   

                    <label>
                        Dish Description
                        <UploadFormTextarea
                            rows={10} 
                            // cols={30}
                            onChange={this.onChange}
                            name='description'
                            placeholder='Enter Dish Description'
                            type='text'
                            value={this.state.description}
                        > </UploadFormTextarea>
                    </label>
                    <UploadButton>
                        <button>Submit Dish</button> 
                        <button>Cancel</button>
                    </UploadButton>
                    
                   
                </UploadForm> 
            </UploadWrapper>
            </Upload>
        )
    }
};

export default AddNewDish