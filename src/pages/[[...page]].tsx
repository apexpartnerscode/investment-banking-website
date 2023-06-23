import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { useRouter } from 'next/router'
import {
  BuilderComponent,
  builder,
  useIsPreviewing,
  Builder,
} from '@builder.io/react'
import DefaultErrorPage from 'next/error'
import Head from 'next/head'
import dynamic from 'next/dynamic'

// put your Public API Key you copied from Builder.io here
const BUILDER_API_KEY = '59df490fe78040cdbef83a436347ab86'
builder.init(BUILDER_API_KEY)

export async function getStaticProps({
  params,
}: GetStaticPropsContext<{ page: string[] }>) {
  const page =
    (await builder
      .get('page', {
        userAttributes: {
          urlPath: '/' + (params?.page?.join('/') || ''),
        },
      })
      .toPromise()) || null

  return {
    props: {
      page,
    },
    revalidate: 5,
  }
}

export async function getStaticPaths() {
  const pages = await builder.getAll('page', {
    options: { noTargeting: true },
  })

  return {
    paths: pages.map((page) => `${page.data?.url}`),
    fallback: true,
  }
}

Builder.registerComponent(
  dynamic(() => import('../components/Header')),
  {
    name: 'Header',
    inputs: [
      { name: 'link1Name', type: 'text' },
      { name: 'link1Href', type: 'text' },
      { name: 'link2Name', type: 'text' },
      { name: 'link2Href', type: 'text' },
      { name: 'link3Name', type: 'text' },
      { name: 'link3Href', type: 'text' },
      { name: 'link4Name', type: 'text' },
      { name: 'link4Href', type: 'text' },
      { name: 'link5Name', type: 'text' },
      { name: 'link5Href', type: 'text' },
      { name: 'logoImg', type: 'file' },
    ],
    image:
      'https://tabler-icons.io/static/tabler-icons/icons-png/3d-cube-sphere-off.png',
  },
)
Builder.registerComponent(
  dynamic(() => import('../components/Hero')),
  {
    name: 'Hero',
    inputs: [
      { name: 'heroTitle', type: 'text' },
      { name: 'heroSubtitle', type: 'text' },
      { name: 'heroButton', type: 'text' },
      { name: 'heroImg', type: 'file' },
    ],
    image: '',
  },
)

export default function Page({
  page,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter()
  if (router.isFallback) {
    return <h1>Loading...</h1>
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const isPreviewing = useIsPreviewing()
  if (!page && !isPreviewing) {
    return (
      <>
        <Head>
          <meta name="robots" content="noindex" />
          <meta name="title"></meta>
        </Head>
        <DefaultErrorPage statusCode={404} />
      </>
    )
  }

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <BuilderComponent model="page" content={page} />
    </>
  )
}