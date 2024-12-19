import Image from 'next/image'

import { MotionFadeInFromBottomWithScroll } from '@/components/motion/MotionFadeInFromBottomWithScroll'
import { SectionTitle } from '@/components/parts/SectionTitle'
import { Skills } from '@/components/parts/Skills'
import { Window } from '@/components/parts/Window'

import { getTranslationInSSR } from '@/app/i18n/index'
import myPicture from '@/public/images/me.jpeg'

type Props = {
  lng: string
}

const aboutDataSet = ['languages', 'frameworks', 'others', 'certifications']

const skillsData = {
  languages: [
    { iconClass: 'i-vscode-icons-file-type-typescript-official', label: 'TypeScript' },
    { iconClass: 'i-vscode-icons-file-type-js-official', label: 'JavaScript' },
    { iconClass: 'i-vscode-icons-file-type-node', label: 'Node.js' },
    { iconClass: 'i-vscode-icons-file-type-python', label: 'Python' },
    { iconClass: 'i-vscode-icons-file-type-ruby', label: 'Ruby' }
  ],
  frameworks: [
    { iconClass: 'i-vscode-icons-file-type-reactjs', label: 'React' },
    { iconClass: 'i-vscode-icons-file-type-vue', label: 'Vue.js' },
    { iconClass: 'i-vscode-icons-file-type-next', label: 'Next.js' },
    { iconClass: 'i-vscode-icons-file-type-nuxt', label: 'Nuxt.js' },
    { iconClass: 'i-logos-express', label: 'Express.js' },
    { iconClass: 'i-vscode-icons-file-type-rails', label: 'Ruby on Rails' },
    { iconClass: 'i-devicon-fastapi', label: 'FastAPI' },
    { iconClass: 'i-vscode-icons-file-type-serverless', label: 'Serverless Framework' },
    { iconClass: 'i-devicon-redux', label: 'Redux' },
    { iconClass: 'i-logos-recoil', label: 'Recoil' },
    { iconClass: 'i-devicon-d3js', label: 'D3.js' },
    { iconClass: 'i-logos-tailwindcss-icon', label: 'Tailwind CSS' },
    { iconClass: 'i-devicon-bootstrap', label: 'Bootstrap ' }
  ],
  others: [
    { iconClass: 'i-devicon-amazonwebservices-wordmark', label: 'AWS' },
    { iconClass: 'i-logos-terraform-icon', label: 'Terraform' },
    { iconClass: 'i-logos-docker-icon', label: 'Docker' },
    { iconClass: 'i-logos-github-octocat', label: 'Git / GitHub' },
    { iconClass: 'i-devicon-githubactions', label: 'GitHub Actions' },
    { iconClass: 'i-logos-bitbucket', label: 'Bitbucket' },
    { iconClass: 'i-devicon-rspec', label: 'RSpec' },
    { iconClass: 'i-devicon-vitest', label: 'Vitest' },
    { iconClass: 'i-logos-jest', label: 'Jest' },
    { iconClass: 'i-logos-storybook-icon', label: 'Storybook' },
    { iconClass: 'i-logos-graphql', label: 'GraphQL' },
    { iconClass: 'i-logos-prisma', label: 'Prisma' },
    { iconClass: 'i-logos-supabase-icon', label: 'Supabase' },
    { iconClass: 'i-logos-mongodb-icon', label: 'MongoDB' },
    { iconClass: 'i-logos-aws-dynamodb', label: 'DynamoDB' },
    { iconClass: 'i-logos-mysql', label: 'MySQL' }
  ],
  certifications: [
    {
      iconClass: 'i-devicon-amazonwebservices-wordmark',
      label: 'AWS Certified Solutions Architect - Associate'
    }
  ],
  clouds: [
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
}

export const About = async (props: Props) => {
  const { t } = await getTranslationInSSR(props.lng, 'main')

  return (
    <section id="About">
      <MotionFadeInFromBottomWithScroll>
        <SectionTitle title="About" index="01" />
      </MotionFadeInFromBottomWithScroll>
      <MotionFadeInFromBottomWithScroll>
        <div className="md:px-8">
          <Window>
            <div className="md:m-0 mt-6">
              <div className="grid lg:grid-cols-4 grid-cols-1 mb-8">
                <div className="col-span-1 flex justify-center">
                  <Image
                    className="mask mask-circle"
                    alt="me"
                    src={myPicture}
                    height="140"
                    width="140"
                  />
                </div>
                <div className="col-span-3 flex items-center">
                  <div>
                    <h2 className="text-[50px] text-secondary font-bold">Naoya Ishizaka</h2>
                    <h3>Frontend Developer</h3>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                {aboutDataSet.map((data) => (
                  <div className="grid lg:grid-cols-4 grid-cols-1" key={data}>
                    <div className="col-span-1 text-secondary mb-4 lg:mb-0 font-bold border-l-[4px] border-primary pl-5 items-center flex">
                      {t(`about.information.${data}Label`)}
                    </div>
                    <div className="col-span-3">
                      {data === 'yearsOfExperience' ? (
                        t(`about.information.${data}`)
                      ) : (
                        <Skills skillsData={skillsData[data as keyof typeof skillsData]} />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Window>
        </div>
      </MotionFadeInFromBottomWithScroll>
    </section>
  )
}
