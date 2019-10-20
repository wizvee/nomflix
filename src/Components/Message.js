import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const Text = styled.span``;

const Message = ({ text, color }) => {
  return (
    <Container>
      <Text style={{ color }}>{text}</Text>
    </Container>
  );
};

Message.prototype = {
  text: PropTypes.string.isRequired
};

export default Message;
