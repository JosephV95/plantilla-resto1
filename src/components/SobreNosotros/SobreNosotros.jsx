import { Card, CardBody, CardHeader, Typography } from "@material-tailwind/react";

export default function SobreNosotros() {
  return (
    <section className="w-full h-auto flex py-16 columns-1 bg-orange-50">
      {/* <div className="w-[100vw] md:w-5/12  bg-orange-400 ">
        <img src="../img/about.jpg" alt="imgAbout" className="object-cover" />
      </div>
      <div className="w-[100vw] md:w-7/12  bg-cyan-500 px-4 md:x-24 space-y-4 my-auto py-auto">
        <h1 className="text-3xl">Eum ipsam laborum deleniti velit pariatur architecto aut nihil</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute
          irure dolor in reprehenderit
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <ul>
          <li>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
          <li>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
          <li>
            Ullamco laboris nisi ut aliquip ex ea commodo consequat.Ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </li>
        </ul>

        <p>
          Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum
        </p>
      </div> */}

      <Card className="w-full  flex-row flex-wrap">
            <CardHeader
              shadow={false}
              floated={false}
              className="m-0 w-full md:w-2/5 shrink-0 rounded-r-none"
            >
              <img
                src="../img/about.jpg"
                alt="card-image"
                className="h-full w-full object-cover"
              />
            </CardHeader>
            <CardBody className="w-full md:w-3/5">
              <Typography variant="h6" color="gray" className="mb-4 uppercase">
                startups
              </Typography>
              <Typography variant="h4" color="blue-gray" className="mb-2">
                Lyft launching cross-platform service this week
              </Typography>
              <Typography color="gray" className="mb-8 font-normal">
                Like so many organizations these days, Autodesk is a company in
                transition. It was until recently a traditional boxed software company
                selling licenses. Yet its own business model disruption is only part
                of the story
              </Typography>
             
            </CardBody>
          </Card>
    </section>
  );
}
