import React, { FC } from 'react'
import Head from 'next/head'
import { ExternalLink } from '../components/ExternalLink'
import { FeaturedProject } from '../components/FeaturedProject'
import { AnchorProps, WithLayout } from '../types'
import { getStandardLayout } from '../layouts'

const ProseLink: FC<AnchorProps> = props => {
  return (
    <ExternalLink className="font-bold text-blue-500 underline" {...props} />
  )
}

const Home: WithLayout = () => {
  return (
    <>
      <Head>
        <title>Jack Cuthbert · Full-Stack Software Engineer</title>
      </Head>

      <h1 className="font-black text-4xl mb-12">👋 Yo, I'm Jack.</h1>
      <p className="mb-12 text-gray-800 text-xl pb-8 border-b-2 leading-relaxed">
        I'm a <strong>full stack software engineer</strong> based in Melbourne,
        Australia with a passion for{' '}
        <strong>product development and design</strong>.
      </p>

      <div className="space-y-4 mb-12 leading-relaxed">
        <p>
          I currently work full-time as a Senior Software Engineer at{' '}
          <ProseLink href="https://www.buenosystems.com.au/">BUENO</ProseLink>{' '}
          where I <del>delete</del> write lots of TypeScript and{' '}
          <del>sometimes</del> never break production. Previously I've worked in
          both agency and product roles for{' '}
          <ProseLink href="https://marketplacer.com/">Marketplacer</ProseLink>{' '}
          and <ProseLink href="https://www.luminary.com/">Luminary</ProseLink>.
        </p>
        <p>
          I have a background in user interface and web design after attending
          Griffith University in Brisbane, Australia and graduating with a
          Bachelor of Multimedia majoring in Internet Computing and Internet
          Marketing.
        </p>
        <p>
          I love working with{' '}
          <ProseLink href="https://nodejs.org/en/">Node.js</ProseLink>,{' '}
          <ProseLink href="https://www.typescriptlang.org/">
            TypeScript
          </ProseLink>
          , <ProseLink href="https://reactjs.org/">React</ProseLink>,{' '}
          <ProseLink href="https://kotlinlang.org/">Kotlin</ProseLink>, and{' '}
          <ProseLink href="https://www.figma.com">Figma</ProseLink> but I'm
          always keen to learn new things and trying out new ideas.
        </p>
      </div>

      <h2 className="font-bold text-xl mb-8">My projects</h2>
      <div className="grid grid-cols-1 gap-12 items-start sm:grid-cols-2 sm:gap-6 -mx-4 mt-4 mb-12">
        <div className="grid grid-cols-1 gap-6 items-start">
          <FeaturedProject
            href="https://github.com/JackCuthbert/jackcuthbert.dev"
            imageSrc="/jackcuthbert-dev-favicon.png"
            name="jackcuthbert.dev"
            year={2021}
            description="My personal site, built with Next.js, TypeScript, and Tailwind. Statically generated content with MDX and dynamic API integrations."
          />
          <FeaturedProject
            href="https://github.com/JackCuthbert/dotfiles"
            imageSrc="/dotfiles-favicon.png"
            name="dotfiles"
            year={new Date().getFullYear()}
            description="The configuration files for my Arch Linux systems. Vim and i3wm powered power user workflow."
          />
        </div>

        <div className="grid grid-cols-1 gap-6 items-start">
          <FeaturedProject
            href="https://kaomoji.moe"
            imageSrc="/kaomoji-favicon.png"
            name="Kaomoji.moe"
            year={2019}
            description="A Slack app providing instant access to over 10,000 fun and unique Japanese kaomoji. Built with TypeScript, Next.js, and Google Cloud Run."
          />
          <FeaturedProject
            href="https://github.com/JackCuthbert/slack-fm"
            imageSrc="/slack-fm-favicon.png"
            name="slack-fm"
            year={2020}
            description="A tiny self-hosted service that automatically updates your Slack status from your Last.fm profile just like in the good ol' days of MSN messenger."
          />
        </div>
      </div>

      <h2 className="font-bold text-xl mb-8">Find me</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
        <ProseLink href="https://github.com/JackCuthbert">GitHub</ProseLink>
        <ProseLink href="https://www.linkedin.com/in/jackcuthbert/">
          LinkedIn
        </ProseLink>
        <ProseLink href="https://steamcommunity.com/id/xs1mple/">
          Steam
        </ProseLink>
        <ProseLink href="https://last.fm/user/jckcthbrt">Last.fm</ProseLink>
      </div>
    </>
  )
}

Home.getLayout = getStandardLayout

export default Home
