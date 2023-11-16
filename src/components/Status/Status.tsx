import React, { useEffect, useState } from 'react';
import './Status.scss';
import { getStatus, setNewStatus } from '../../api/profile';
import { useParams } from 'react-router';
import { useAppSelector } from '../../redux/hooks';

export const Status = () => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState('');
  const { userId } = useParams();
  const isAuth = useAppSelector(state => state.auth.isAuth);
  const myId = useAppSelector(state => state.auth.userId);

  useEffect(() => {
    if (userId) {
      getStatus(+userId)
        .then((response) => {
          setStatus(response.data);
        });
    }
  }, []);

  const putNewStatus = () => {
    setEditMode(false);

    setNewStatus(status)
      .then(response => {
        if (response.data.resultCode === 0) {
          setStatus(status);
        }
      })
  }

  const changeStatus = () => {
    if (isAuth && !!userId && +userId === myId) {
      setEditMode(true)
    }
  }

  return (
    <div className="mb10">
      {!editMode
        ? (
          <>
            {!!status && (
              <div onDoubleClick={changeStatus}><b>Status: </b>{status}</div>
            )}
            {isAuth && !status && !!userId && +userId === myId && (
              <button className="btn btn-primary" onClick={changeStatus}>
                Add status
              </button>
            )}
          </>
        )
        : (
          <div onBlur={putNewStatus} className="edit-status">
            <input
              type="text"
              value={status}
              onChange={e => setStatus(e.target.value)}
              autoFocus={true}
              placeholder="Write new status..."
            />
          </div>
        )}
    </div>
  )
}
