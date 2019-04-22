import styled from 'styled-components';
const mainBlue = '#2A2D34';
const mainGreen = '#637573';
const fontColor= '#009B72'
const accentColor = '#F26430';
const lightColor = '#98999C';

export const Upload = styled.div`

    padding-top: 3rem;
    min-height: 100vh;
    background-color: #bdb9b9 ;
    /* border: 1px solid red; */
`;
export const UploadWrapper = styled.div`
    background-color: white;
    border: 1.4px solid ${accentColor};
    border-radius: 2.5px;

    margin:  0 auto;
    padding: 0 1rem;
    width: 68%;
    position: relative;
    h1 {
        font-size: 3rem;
        border-bottom: 1.5px solid ${accentColor};
        color: ${fontColor};
        text-transform: uppercase;
    }
`;

export const UploadForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* padding-left: 1rem; */
    /* padding-top: 1rem; */
    /* height: auto; */
    label {
        color: ${fontColor};
        text-transform: uppercase;
    }
`;

export const UploadFormInput = styled.input`
    display: block;
    margin: .5rem 0 1rem 0;
    padding: .5rem;
    width: 95%;
    border: 1px solid ${mainBlue};
    border-radius: 2.5px;
`;

export const ImagePreview = styled.img`
      margin: 1.5rem 0;
      width: 40%;
`;
export const UploadFormTextarea = styled.textarea`
    display: block;
    border: 1px solid ${mainBlue};
    border-radius: 2.5px;
    margin: .5rem 0;
    padding: .5rem;
    width: 95%;
`;

export const UploadButton = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 1rem 0;
    button {
        border: 1px solid ${mainBlue};
        border-radius: 2.5px;
        color: ${fontColor};
        font-size: 1rem;
        height: 40px;
        width: 30%;
    }
`;