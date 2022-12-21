import PropTypes from "prop-types";

export const Image = (props) =>{
    return(
        <img src={props.src} height={props.height} width={props.width} />
    );
}