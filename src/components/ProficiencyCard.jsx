import { Card, CardBody, Typography } from '@material-tailwind/react';
import PropTypes from 'prop-types';

export function ProficiencyCard({ icon: Icon, title, children }) {
  return (
    <Card color="transparent" shadow={false}>
      <CardBody className="grid justify-center text-center">
        <div className="mx-auto mb-6 grid h-12 w-12 place-items-center rounded-full p-2.5 bg-blue-gray-700 text-gray-200 shadow">
          <Icon className="h-6 w-6" strokeWidth={2} />
        </div>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {title}
        </Typography>
        <Typography className="px-8 font-normal !text-gray-500">{children}</Typography>
      </CardBody>
    </Card>
  );
}

ProficiencyCard.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
  children: PropTypes.node,
};

export default ProficiencyCard;
