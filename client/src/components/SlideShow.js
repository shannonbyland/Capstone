import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFiveEntries } from '../actions/slideshow';
import { Carousel } from 'react-responsive-carousel';
import { Image } from 'cloudinary-react';
import { Link } from 'react-router-dom';
import 'react-responsive-carousel/lib/styles/carousel.css';

class SlideShow extends Component {
  componentDidMount() {
    this.props.dispatch(getFiveEntries());
  }

  render() {
    const renderJournals = this.props.topFive.map(journal => {
      return (
        <Link to={`/singleentry/${journal._id}`} key={journal._id}>
          <div key={journal._id}>
            <p className="legend">{journal.title}</p>
              <Image
                cloudName="journal-love"
                publicId={journal.image}
                width="500"
                height="700"
                crop="crop"
              />
          </div>
        </Link>
      )
    })

    return (
      <Carousel axis="horizontal" showThumbs={false} showArrows={true} width="100%">
        {renderJournals}
     </Carousel>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    topFive: state.topFive
  }
}

export default connect(mapStateToProps)(SlideShow);
