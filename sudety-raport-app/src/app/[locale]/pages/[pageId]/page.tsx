import React from 'react'

type InputType = {
  params: Promise<{
    pageId: string;
  }>
};

export default async function CategoryPage({ params }: Readonly<InputType>) {
  const { pageId } = await params;

  return (
    <div>{`This is a page ${pageId}`}</div>
  )
}
