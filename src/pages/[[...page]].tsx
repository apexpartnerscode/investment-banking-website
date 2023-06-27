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
      { name: 'heroButtonText', type: 'text' },
      { name: 'heroButtonHref', type: 'text' },
      { name: 'heroImg', type: 'file' },
    ],
    image: '',
  },
)

Builder.registerComponent(
  dynamic(() => import('../components/Button')),
  {
    name: 'Button',
    inputs: [
      { name: 'ButtonText', type: 'text' },
      { name: 'ButtonHref', type: 'text' },
    ],
    image:
      'https://e7.pngegg.com/pngimages/642/700/png-clipart-lupin-oy-button-html-submit-button-text-rectangle-thumbnail.png',
  },
)

Builder.registerComponent(
  dynamic(() => import('../components/HighlightCard')),
  {
    name: 'Card',
    inputs: [
      { name: 'cardIcon', type: 'file' },
      { name: 'cardText', type: 'text' },
    ],
    image: '',
  },
)

Builder.registerComponent(
  dynamic(() => import('../components/HighlightsSection')),
  {
    name: 'HighlightsSection',
    inputs: [
      { name: 'card1Icon', type: 'file' },
      { name: 'card1Text', type: 'string' },
      { name: 'card2Icon', type: 'file' },
      { name: 'card2Text', type: 'string' },
      { name: 'card3Icon', type: 'file' },
      { name: 'card3Text', type: 'string' },
      { name: 'card4Icon', type: 'file' },
      { name: 'card4Text', type: 'string' },
      { name: 'card5Icon', type: 'file' },
      { name: 'card5Text', type: 'string' },
      { name: 'card6Icon', type: 'file' },
      { name: 'card6Text', type: 'string' },
    ],
    image: '',
  },
)

Builder.registerComponent(
  dynamic(() => import('../components/SolutionsSection')),
  {
    name: 'SolutionsSection',
    inputs: [
      { name: 'backgroundImage', type: 'file' },
      { name: 'linkIcon', type: 'file' },
      { name: 'title', type: 'string' },
      { name: 'linkText', type: 'string' },
      { name: 'linkHref', type: 'string' },
    ],
    image: '',
  },
)

Builder.registerComponent(
  dynamic(() => import('../components/Services')),
  {
    name: 'Services',
    inputs: [
      { name: 'title', type: 'text' },
      { name: 'description', type: 'text' },
      { name: 'imageUrl', type: 'file' },
      { name: 'thereIsLine', type: 'boolean' },
      { name: 'imageRightSide', type: 'boolean' },
      {
        name: 'list',
        type: 'list',
        subFields: [
          { name: 'service', type: 'string' },
          { name: 'service1', type: 'string' },
          { name: 'service2', type: 'string' },
          { name: 'service3', type: 'string' },
          { name: 'service4', type: 'string' },
        ],
      },
      { name: 'hexBackgroundColor', type: 'text' },
    ],
    image: '',
  },
)

Builder.registerComponent(
  dynamic(() => import('../components/Contact')),
  {
    name: 'Contact',
    inputs: [
      { name: 'title', type: 'string' },
      { name: 'description', type: 'string' },
      { name: 'contactMailTitle', type: 'string' },
      { name: 'contactMailDescription', type: 'string' },
      { name: 'contactPhoneTitle', type: 'string' },
      { name: 'contactPhoneDescription', type: 'string' },
    ],
    image: '',
  },
)

Builder.registerComponent(
  dynamic(() => import('../components/Accordion')),
  {
    name: 'Accordion',
    inputs: [
      {
        name: 'topic',
        type: 'list',
        subFields: [
          { name: 'title', type: 'string' },
          { name: 'content', type: 'string' },
        ],
      },
      {
        name: 'topic1',
        type: 'list',
        subFields: [
          { name: 'title', type: 'string' },
          { name: 'content', type: 'string' },
        ],
      },
      {
        name: 'topic2',
        type: 'list',
        subFields: [
          { name: 'title', type: 'string' },
          { name: 'content', type: 'string' },
        ],
      },
      {
        name: 'topic3',
        type: 'list',
        subFields: [
          { name: 'title', type: 'string' },
          { name: 'content', type: 'string' },
        ],
      },
      {
        name: 'topic4',
        type: 'list',
        subFields: [
          { name: 'title', type: 'string' },
          { name: 'content', type: 'string' },
        ],
      },
    ],
    image: '',
  },
)

Builder.registerComponent(
  dynamic(() => import('../components/WhoWeAre')),
  {
    name: 'WhoWeAre',
    inputs: [{ name: 'image', type: 'file' }],
    image: '',
  },
)

Builder.registerComponent(
  dynamic(() => import('../components/Solutions')),
  {
    name: 'Solutions',
    inputs: [],
    image: '',
  },
)
Builder.registerComponent(
  dynamic(() => import('../components/Footer')),
  {
    name: 'Footer',
    inputs: [
      { name: 'apexLogo', type: 'file' },
      {
        name: 'siteMapLinks',
        type: 'list',
        subFields: [
          { name: 'link1', type: 'string' },
          { name: 'link1Href', type: 'string' },
          { name: 'link2', type: 'string' },
          { name: 'link2Href', type: 'string' },
          { name: 'link3', type: 'string' },
          { name: 'link3Href', type: 'string' },
          { name: 'link4', type: 'string' },
          { name: 'link4Href', type: 'string' },
          { name: 'link5', type: 'string' },
          { name: 'link5Href', type: 'string' },
        ],
      },
      {
        name: 'locationsLinks',
        type: 'list',
        subFields: [
          { name: 'link1', type: 'string' },
          { name: 'link1Href', type: 'string' },
          { name: 'link2', type: 'string' },
          { name: 'link2Href', type: 'string' },
          { name: 'link3', type: 'string' },
          { name: 'link3Href', type: 'string' },
          { name: 'link4', type: 'string' },
          { name: 'link4Href', type: 'string' },
        ],
      },
      {
        name: 'socialNetworksLinks',
        type: 'list',
        subFields: [
          { name: 'Instagram', type: 'string' },
          { name: 'LinkedIn', type: 'string' },
        ],
      },
      { name: 'phoneNumber', type: 'string' },
      { name: 'contactEmail', type: 'string' },
      { name: 'ouvidoriaEmail', type: 'string' },
      { name: 'copyWriteYear', type: 'string' },
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
