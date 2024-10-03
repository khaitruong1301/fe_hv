import React from "react";

const SkillRoadmap = () => {
  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title mb-5">Lộ trình học theo skill</h4>
        <div className="hori-timeline" dir="ltr">
          <ul className="list-inline events">
            <li className="list-inline-item event-list">
              <div className="px-4">
                <div className="event-date bg-soft-primary text-primary">
                  2 June
                </div>
                <h5 className="font-size-16">Event One</h5>
                <p className="text-muted">
                  It will be as simple as occidental in fact it will be
                  Occidental Cambridge friend
                </p>
                <div>
                  <a href="#" className="btn btn-primary btn-sm">
                    Read more
                  </a>
                </div>
              </div>
            </li>
            <li className="list-inline-item event-list">
              <div className="px-4">
                <div className="event-date bg-soft-success text-success">
                  5 June
                </div>
                <h5 className="font-size-16">Event Two</h5>
                <p className="text-muted">
                  Everyone realizes why a new common language one could refuse
                  translators.
                </p>
                <div>
                  <a href="#" className="btn btn-primary btn-sm">
                    Read more
                  </a>
                </div>
              </div>
            </li>
            <li className="list-inline-item event-list">
              <div className="px-4">
                <div className="event-date bg-soft-danger text-danger">
                  7 June
                </div>
                <h5 className="font-size-16">Event Three</h5>
                <p className="text-muted">
                  If several languages coalesce the grammar of the resulting
                  simple and regular
                </p>
                <div>
                  <a href="#" className="btn btn-primary btn-sm">
                    Read more
                  </a>
                </div>
              </div>
            </li>
            <li className="list-inline-item event-list">
              <div className="px-4">
                <div className="event-date bg-soft-warning text-warning">
                  8 June
                </div>
                <h5 className="font-size-16">Event Four</h5>
                <p className="text-muted">
                  Languages only differ in their pronunciation and their most
                  common words.
                </p>
                <div>
                  <a href="#" className="btn btn-primary btn-sm">
                    Read more
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SkillRoadmap;
