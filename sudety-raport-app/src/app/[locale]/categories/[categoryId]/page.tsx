import React from 'react'

type InputType = {
  params: Promise<{
    categoryId: string;
  }>
};

export default async function CategoryPage({ params }: Readonly<InputType>) {
  const { categoryId } = await params;

  return (
    <div>{`This is a categories page ${categoryId}`}</div>
  )
}
