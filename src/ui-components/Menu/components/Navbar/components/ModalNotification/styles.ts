import styled from 'styled-components'

export const NotificationsArea = styled.div`
  padding: 2rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`
export const NotificationWithAction = styled.div`
  background-color: #ffffff;
  padding: 1rem 0.8rem;
  border-radius: 6px;
  box-shadow: 0px 0px 43px 0px rgba(0, 0, 0, 0.12);

  display: flex;
  align-items: center;
  justify-content: space-between;

  div:first-child {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    svg {
      width: 1.5rem;
      height: 1.5rem;
      padding: 0.25rem;
      background-color: #750c41;
      color: #ffffff;
      border-radius: 60px;
    }
  }
`

export const ReadButton = styled.button`
  border-radius: 6px;
  padding: 0.5rem 0.75rem;
  background-color: transparent;
  border: 1px solid #750c41;
  color: #750c41;
  font-size: 0.75rem;
  transition: all 0.2s ease-in-out;
  font-weight: bold;

  &:hover:not(:disabled) {
    background-color: #750c41;
    color: #ffffff;
  }

  &:disabled {
    border: 1px solid #9ca3af;
    color: #9ca3af;
    cursor: not-allowed;
  }
`
