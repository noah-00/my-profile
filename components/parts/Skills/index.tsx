import React from 'react'

import { getTranslationInSSR } from '@/app/i18n/index'

type Props = {
  lng: string
}

const SkillBadge = ({ iconClass, label }: any) => (
  <div className="badge md:badge-lg md:p-4 p-2.5 m-1.5">
    <span className={`${iconClass} mr-2`}></span>
    {label}
  </div>
)

export const Skills = async (props: Props) => {
  const { t } = await getTranslationInSSR(props.lng, 'main')

  const languages = [
    { iconClass: 'i-vscode-icons-file-type-typescript-official', label: 'TypeScript' },
    { iconClass: 'i-vscode-icons-file-type-js-official', label: 'JavaScript' },
    { iconClass: 'i-vscode-icons-file-type-node', label: 'Node.js' },
    { iconClass: 'i-vscode-icons-file-type-python', label: 'Python' },
    { iconClass: 'i-vscode-icons-file-type-ruby', label: 'Ruby' }
  ]

  const frameworks = [
    { iconClass: 'i-vscode-icons-file-type-reactjs', label: 'React' },
    { iconClass: 'i-vscode-icons-file-type-vue', label: 'Vue.js' },
    { iconClass: 'i-vscode-icons-file-type-next', label: 'Next.js' },
    { iconClass: 'i-vscode-icons-file-type-nuxt', label: 'Nuxt.js' },
    { iconClass: 'i-logos-express', label: 'Express.js' },
    { iconClass: 'i-vscode-icons-file-type-rails', label: 'Ruby on Rails' },
    { iconClass: 'i-devicon-fastapi', label: 'FastAPI' },
    { iconClass: 'i-vscode-icons-file-type-serverless', label: 'Serverless Framework' },
    { iconClass: 'i-logos-tailwindcss-icon', label: 'Tailwind CSS' }
  ]

  const clouds = [
    { iconClass: 'i-devicon-amazonwebservices-wordmark', label: 'AWS' },
    { iconClass: 'i-logos-aws-amplify', label: 'Amplify' },
    { iconClass: 'i-logos-aws-fargate', label: 'Fargate' },
    { iconClass: 'i-logos-aws-ecs', label: 'ECS' },
    { iconClass: 'i-logos-aws-ec2', label: 'EC2' },
    { iconClass: 'i-logos-aws-lambda', label: 'Lambda' },
    { iconClass: 'i-logos-aws-dynamodb', label: 'DynamoDB' },
    { iconClass: 'i-logos-aws-s3', label: 'S3' },
    { iconClass: 'i-logos-aws-cognito', label: 'Cognito' },
    { iconClass: 'i-logos-aws-ses', label: 'SES' },
    { iconClass: 'i-logos-aws-api-gateway', label: 'API Gateway' },
    { iconClass: 'i-logos-aws-appsync', label: 'AppSync' },
    { iconClass: 'i-logos-aws-cloudfront', label: 'CloudFront' },
    { iconClass: 'i-logos-aws-route53', label: 'Route53' },
    { iconClass: 'i-logos-aws-open-search', label: 'OpenSearch' },
    { iconClass: 'i-logos-aws-cloudwatch', label: 'CloudWatch' },
    { iconClass: 'i-logos-aws-cloudformation', label: 'CloudFormation' }
  ]

  const others = [
    { iconClass: 'i-logos-github-octocat', label: 'Git / GitHub' },
    { iconClass: 'i-devicon-githubactions', label: 'GitHub Actions' },
    { iconClass: 'i-logos-bitbucket', label: 'Bitbucket' },
    { iconClass: 'i-logos-docker-icon', label: 'Docker' },
    { iconClass: 'i-logos-terraform-icon', label: 'Terraform' },
    { iconClass: 'i-logos-jest', label: 'Jest' },
    { iconClass: 'i-devicon-rspec', label: 'RSpec' },
    { iconClass: 'i-logos-storybook-icon', label: 'Storybook' },
    { iconClass: 'i-logos-graphql', label: 'GraphQL' },
    { iconClass: 'i-logos-prisma', label: 'Prisma' },
    { iconClass: 'i-logos-mongodb-icon', label: 'MongoDB' },
    { iconClass: 'i-logos-supabase-icon', label: 'Supabase' }
  ]

  const certifications = [
    {
      iconClass: 'i-devicon-amazonwebservices-wordmark',
      label: 'AWS Certified Solutions Architect - Associate'
    }
  ]

  return (
    <div>
      <h1 className="my-4 underline underline-offset-4">
        {t('about.information.skillsLanguageLabel')}
      </h1>
      <div className="pl-4">
        {languages.map((language) => (
          <SkillBadge key={language.label} iconClass={language.iconClass} label={language.label} />
        ))}
      </div>

      <h1 className="my-4 underline underline-offset-4">
        {t('about.information.skillsFrameWorkLabel')}
      </h1>
      <div className="pl-4">
        {frameworks.map((framework) => (
          <SkillBadge
            key={framework.label}
            iconClass={framework.iconClass}
            label={framework.label}
          />
        ))}
      </div>

      <h1 className="my-4 underline underline-offset-4">
        {t('about.information.skillsCloudLabel')}
      </h1>
      <div className="pl-4">
        {clouds.map((cloud) => (
          <SkillBadge key={cloud.label} iconClass={cloud.iconClass} label={cloud.label} />
        ))}
      </div>

      <h1 className="my-4 underline underline-offset-4">
        {t('about.information.skillsOtherLabel')}
      </h1>
      <div className="pl-4">
        {others.map((other) => (
          <SkillBadge key={other.label} iconClass={other.iconClass} label={other.label} />
        ))}
      </div>

      <h1 className="my-4 underline underline-offset-4">
        {t('about.information.skillsCertificationLabel')}
      </h1>
      <div className="pl-4">
        {certifications.map((certification) => (
          <SkillBadge
            key={certification.label}
            iconClass={certification.iconClass}
            label={certification.label}
          />
        ))}
      </div>
    </div>
  )
}
