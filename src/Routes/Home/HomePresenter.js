import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "../../Components/Section";

const Container = styled.div`
  padding: 0 10px;
`;

const HomePresenter = ({ nowPlaying, upcoming, popular, error, loading }) => {
  return loading ? null : (
    <Container>
      {nowPlaying && nowPlaying.length > 0 && (
        <Section title="Now Playing">
          {nowPlaying.map(moive => moive.title)}
        </Section>
      )}
      {upcoming && upcoming.length > 0 && (
        <Section title="Upcoming Moives">
          {upcoming.map(moive => moive.title)}
        </Section>
      )}
      {popular && popular.length > 0 && (
        <Section title="Popular Moives">
          {popular.map(moive => moive.title)}
        </Section>
      )}
    </Container>
  );
};

export default HomePresenter;
