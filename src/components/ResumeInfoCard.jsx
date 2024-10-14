import { Card, CardHeader, CardBody, Typography, IconButton } from '@material-tailwind/react';
import PropTypes from 'prop-types';

export function ResumeInfoCard({ icon: Icon, title }) {
  return (
    <Card>
      <CardHeader className="flex items-center justify-between rounded-none overflow-visible" floated={false} shadow={false}>
        <div className="flex flex-col gap-1 w-full">
          <Typography variant="h5" className="w-full text-gray-500">
            {title}
          </Typography>
        </div>
        <IconButton className="flex-shrink-0">
          <Icon className="h-5 w-5" strokeWidth={2} />
        </IconButton>
      </CardHeader>
      <CardBody className="grid justify-start !px-3.5 pt-2">{/* <Typography className=" font-normal !text-gray-500">{children}</Typography> */}</CardBody>
    </Card>
  );
}

ResumeInfoCard.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  //children: PropTypes.node.isRequired,
};

export default ResumeInfoCard;
