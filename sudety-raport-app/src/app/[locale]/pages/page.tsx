import React from 'react'
import client from '@/components/Apollo/apolloClient';
import { GET_ALL_PAGES } from '@/components/Apollo/Queries';
import { ApolloQueryResult } from '@apollo/client';

type PagesDataType = {
  pages: {
    edges: {
      node: {
        id: string;
        title: string;
        excerpt: string;
        slug: string;
        featuredImage: {
          node: {
            sourceUrl: string;
          }
        }
      }
    }[]
  }
};

export default async function Pages({ params }: Readonly<{ params: Promise<{ locale: string }>}>) {
  const { locale } = await params;

  const { data, errors}: ApolloQueryResult<PagesDataType> = await client.query({
    query: GET_ALL_PAGES,
    variables: {
      language: locale === 'cs-CZ' ? 'CZ' : locale.toUpperCase(),
      numberOfPosts: 10
    }
  });

  if (!data || errors) {
    return (
      <p>Error...</p>
    );
  }

  return (
    <div>
      <p>{locale === 'cs-CZ' ? "Stránky" : "Pages"}</p>
      {
        data.pages.edges.map((page => {
          const { id, title, excerpt } = page.node;

          return (
            <div key={id} className='border-t-2'>
              <h1>{title}</h1>
              <p>
                <span dangerouslySetInnerHTML={{__html: excerpt}} />
              </p>
            </div>
          );
        }))
      }
    </div>
  )
}
