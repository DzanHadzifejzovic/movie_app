import React from "react";
import PropTypes from 'prop-types';

//Import Styles
import {Wrapper,Content,Text} from "../HeroImage/HeroImage.styles";

const HeroImage = ({image,title,text}) =>( //or (props)
    <Wrapper image={image}>
        <Content>
            <Text>
                <h1>{title}</h1> 
                <p>{text}</p>
            </Text>
        </Content>
    </Wrapper>
);

HeroImage.propTypes = {
    image: PropTypes.string,
    title:PropTypes.string,
    text:PropTypes.string
}

export default HeroImage;