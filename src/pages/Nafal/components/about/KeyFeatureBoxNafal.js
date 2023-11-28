import React from 'react';
import { Col } from 'reactstrap';

import FeatherIcon from 'feather-icons-react';

export default function KeyFeatureBox(props) {
  const { keyfeatures ,isSeeMore} = props;
  return (
    <React.Fragment>
      {keyfeatures.slice(0,isSeeMore ?keyfeatures.length :9 ).map((feature, key) => (
        <Col lg="4" md="6" key={key} className="mt-4 pt-2" name="keyfeature">
          <div className="d-flex key-feature align-items-center p-3 rounded shadow">
            <div className="icon text-center rounded-circle me-3">
              <FeatherIcon
                icon={feature.icon}
                className="fea icon-ex-md text-primary"
              />
            </div>
            <div className="flex-1">
              <h4 className="title mb-0">{feature.title}</h4>
            </div>
          </div>
        </Col>
      ))}
    </React.Fragment>
  );
}
