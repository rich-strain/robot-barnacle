import PropTypes from 'prop-types';
import { Card, CardHeader, CardBody, CardFooter, Typography, Tooltip } from '@material-tailwind/react';
import { DiGithubBadge } from 'react-icons/di';
// import { BiLink } from 'react-icons/bi';
import { PiLinkFill } from 'react-icons/pi';

export function Project({ img, title, desc }) {
  return (
    <Card color="transparent" shadow={false}>
      <CardHeader floated={false} className="mx-0 mt-0 mb-6 h-48">
        <img src={img} alt={title} width={768} height={768} className="h-full w-full object-cover" />
      </CardHeader>
      <CardBody className="p-0 min-h-55">
        <a href="#" className="text-blue-gray-900 transition-colors hover:text-gray-800">
          <Typography variant="h5" className="mb-2">
            {title}
          </Typography>
        </a>
        <Typography className="font-normal !text-gray-500">{desc}</Typography>
      </CardBody>
      {/* <CardFooter className="flex flex-justify-center gap-7 pt-2">
        <Button color="gray" size="sm">
          Preview
        </Button>
        <Button color="gray" size="sm">
          GitHub
        </Button>
      </CardFooter> */}
      <CardFooter className="flex flex-justify-center gap-6">
        <Tooltip content="Preview App">
          <Typography as="a" href="#facebook" variant="lead" textGradient>
            <PiLinkFill color="#475569" size="2.5rem" />
          </Typography>
        </Tooltip>
        <Tooltip content="GitHub Repo">
          <Typography as="a" href="#twitter" variant="lead" textGradient>
            <DiGithubBadge color="#475569" size="2.5rem" />
          </Typography>
        </Tooltip>
      </CardFooter>
    </Card>
  );
}

//Define Proptypes for Project
Project.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};
export default Project;
