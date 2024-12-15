import { gql } from '@apollo/client';

export const LOAD_POSTS_PREVIEW = gql`
    query($categorySlug: String!) {
      posts(first: 5, where: { categoryName: $categorySlug}) {
        edges {
          node {
            id
            title
            excerpt
            slug
            translations {
              title
            }
            featuredImage {
              node {
                sourceUrl
              }
            }
          }
        }
      }
    }
`;

export const LOAD_SECTION_POSTS = gql`
  query ($categorySlug: String!, $numberOfPosts: Int!, $lastPoint: String) {
    posts(
      first: $numberOfPosts
      after: $lastPoint
      where: {categoryName: $categorySlug}
    ) {
      edges {
        node {
          id
          title
          excerpt
          slug
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
    }
  }
`;

export const LOAD_POST_BY_SLUG = gql`
query($postSlug: ID!) {
    post(id: $postSlug, idType: SLUG) {
	  id
    title
    content
    date
    dateGmt
    link
    status
    slug
    uri
    language {
      locale
      name
      slug
    }
    translations {
      id
      slug
    }
    categories {
      nodes {
        id
        slug
      }
    }
    featuredImage {
      node {
        id
        altText
        link
        mediaItemUrl
        sourceUrl
      }
    }
    author {
      node {
        id
        email
        description
        firstName
        lastName
        locale
        name
        nickname
        uri
        url
        slug
        username
      }
    }
	}
}`;

export const GET_ALL_PAGES = gql`
query ($language: LanguageCodeFilterEnum!, $numberOfPosts: Int!, $lastPoint: String) {
    pages(
      first: $numberOfPosts
      after: $lastPoint
      where:{ language: $language}
    ) {
      edges {
        node {
          id
          title
          excerpt
          slug
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
    }
  }
`;