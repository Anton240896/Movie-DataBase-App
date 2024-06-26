import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

import { requestReviews } from 'components/Api/Api';
import { Loader } from 'components/Loader/Loader';

import {
  ListReview,
  UnOrderedReviews,
  MessageNoComments,
  TextAutor,
} from 'components/Reviews/Reviews.styled';

const Reviews = () => {
  /*   ====== HOOKS ======*/
  const { movieId } = useParams();
  const [loading, setLoading] = useState(false);
  const [reviews, setReviews] = useState([]);

  /*   ====== FETCH REQUEST ======*/

  useEffect(() => {
    const getReviews = async () => {
      try {
        setLoading(true);
        const data = await requestReviews(movieId);
        setReviews(data);
      } catch (error) {
        toast.error('Sorry, we didnt find anything');
      } finally {
        setLoading(false);
      }
    };
    getReviews();
  }, [movieId]);

  /*   ====== RENDER ======*/
  return (
    <div>
      {loading && <Loader />}

      {reviews.length !== 0 && (
        <UnOrderedReviews>
          {reviews.map(review => {
            const { author, content } = review;

            return (
              <ListReview>
                <h2>{author} •</h2>
                <TextAutor>{content}</TextAutor>
              </ListReview>
            );
          })}
        </UnOrderedReviews>
      )}

      {reviews.length === 0 && (
        <MessageNoComments>¯\_(ツ)_/¯ No comments found</MessageNoComments>
      )}
    </div>
  );
};

export default Reviews;
