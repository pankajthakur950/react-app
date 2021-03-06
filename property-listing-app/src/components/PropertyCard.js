import * as React from 'react';
import classnames from 'classnames';
import {Link} from 'react-router-dom';

export default function PropertyCard({ property }) {
  if (!property) {
    return null;
  }

  const {id, image, title, address, description, price } = property;
  const columnClasses = classnames('column', 'col-4', 'col-xs-12');
  const cardClasses = classnames('card');

  return (
    <div className={columnClasses} style={{ margin: '1rem 0' }}>
      <div className={cardClasses}>
        <div className="card-image">
          <img className="img-responsive" src={`/images/${image}`} alt={address} />
        </div>
        <div className="card-header">
          <div className="card-title h5">{title}</div>
          <div className="card-title h6">&pound; {price}</div>
          <div className="card-subtitle text-gray">{address}</div>
        </div>
        <div className="card-body">{description}</div>
        <div className="card-footer">
            <Link className="btn btn-primary" to={`/property/${id}`}>
                Go to property
            </Link>
        </div>
      </div>
    </div>
  )
}
