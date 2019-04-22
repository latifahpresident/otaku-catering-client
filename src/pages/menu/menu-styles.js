import styled from 'styled-components';

const mainBlue = '#2A2D34';
const mainGreen = '#637573';
const fontColor= '#009B72'
const accentColor = '#F26430';
const lightColor = '#98999C';

export const MenuWrapper = styled.div`
    background-color: #edf3f0;
    height: 100vh;
    border: 1px solid green;
    padding: 0 1rem;

    h1 {
        color: ${accentColor};
        font-size: 3rem;
    }
`;
export const DishWrapper = styled.div`
   height: auto;
    /* border: 1px solid red; */
`;

export const DishContent = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 5rem;
    margin: 0 auto;
    width: 80%;
    /* border: 1px solid orange; */
`;


export const Dish = styled.div`
    border: 1px solid ${mainBlue};
    border-radius: 4px;
`;

export const DishTitle = styled.div`
  background-color: ${mainBlue};
  border: 1px solid ${mainBlue};
  padding: 0 1rem;
 h3 {
        font-size: 1.6rem;
        font-weight: lighter;
        color: #dde9e6;
        margin-bottom: 2rem;
        text-align: center;
        text-transform: uppercase;
    }
`;