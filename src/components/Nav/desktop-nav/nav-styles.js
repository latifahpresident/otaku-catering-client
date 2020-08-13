import styled  from 'styled-components';
const mainBlue = '#2A2D34';
const mainGreen = '#637573';
const fontColor= '#009B72'
const accentColor = '#F26430';

export const NavLinksWrapper = styled.nav`
    background-color: #2a0061;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    height: 6rem;
    text-transform: uppercase;
    border: 1.5px solid ${mainBlue};

    .active {
        border-bottom: 2px solid ${accentColor};
    }
    .nav-link {
        color: ${fontColor};
        /* color: ${mainBlue}; */
        font-size: 1.14rem;
        letter-spacing: 5px;
        text-decoration: none;
    }
    .font-icon {
        margin-left: .5rem;
    }

    a {
        text-decoration: none;
    }

    .phone-icon {
        color: ${fontColor};
        margin-right: .5rem;
    }
`;

export const CateringDropdown = styled.div`
    background-color: ${mainBlue};
    position: absolute;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    opacity: .95;
    justify-content: space-between;
    height: 90px;
    margin-left: 15.5rem;
    margin-top: 1.5rem;
    padding: .5rem 0;
    width: 20.9%;
    border: 1px solid green;
    /* z-index: 2; */
    .dropdown-link {
        color: #dde9e6;

        :hover {
            border-bottom: 1px solid ${fontColor}
        }
    }
`;

