import React, { useContext } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Card, TitleWrap } from 'components/common';
import Github from 'components/common/Icons/Github';
import { Wrapper, Grid, Item, Content, Stats, Languages } from './styles';

const nameObj = {
  calendar: 'Hoon Calendar',
  portfolio: 'Portfolio Website',
  glearn: 'Galvanize Learn',
  'jason-nav': 'Getsy Systems Design',
  'overview-2': 'HipCamp Clone',
};

export const Applications = () => {
  const { theme } = useContext(ThemeContext);
  const {
    github: {
      viewer: {
        starredRepositories: { edges },
      },
    },
  } = useStaticQuery(
    graphql`
      {
        github {
          viewer {
            starredRepositories(first: 10, orderBy: { field: STARRED_AT, direction: DESC }) {
              edges {
                node {
                  id
                  name
                  url
                  description
                  languages(first: 3) {
                    nodes {
                      id
                      name
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  );
  return (
    <Wrapper as={Container} id="applications">
      <h2>Some Things I've Built</h2>
      <Grid>
        {edges.map(({ node }) => (
          <Item key={node.id} as="a" href={node.url} target="_blank" rel="noopener noreferrer" theme={theme}>
            <Card theme={theme}>
              <Content>
                <Stats theme={theme}>
                  <h4>{nameObj[node.name] ? nameObj[node.name] : node.name}</h4>
                  <Github color={theme === 'light' ? '#000' : '#fff'} />
                </Stats>
                <p>{node.description}</p>
              </Content>
              <TitleWrap>
                <Stats theme={theme}>
                  <Languages>
                    {node.languages.nodes.map(({ id, name }) => (
                      <span key={id}>{name}</span>
                    ))}
                  </Languages>
                </Stats>
              </TitleWrap>
            </Card>
          </Item>
        ))}
      </Grid>
    </Wrapper>
  );
};
