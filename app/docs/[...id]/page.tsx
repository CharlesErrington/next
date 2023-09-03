type DocsIdPageProps = {
  params: {
    id: string
  }
}

const DocsIdPage = ({ params }: DocsIdPageProps) => {
  return <div>DocsIdPage {params.id}</div>
}

export default DocsIdPage
