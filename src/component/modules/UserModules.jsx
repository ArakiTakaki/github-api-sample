import {h} from 'preact';
import * as Img from '../../images'
import './UserModules.css'

export const UserProfile = (props) => {
  const {name, img, repos, link} = props;
  return(
    <div styleName="profile">
      <p>
        <img styleName="profile__image" src={img} width="100" alt="ProfileImage"/>
      </p>
      <div styleName="profile__text-content">
        <p styleName="profile__text-content__header">
          <a href={link}>{name}</a>
        </p>
        <p styleName="profile__text-content__repos">
          レポジトリ数：{repos}
        </p>
      </div>
    </div>
  )
}

export const UserRepos = (props) => {
  const { event, repo:{ html_url, name, clone_url, ssh_url, updated_at, stargazers_count}} = props;
  return(
    <div styleName="repos">
      <p>
        <a href={html_url} target="_blank">
          {name}
        </a>
      </p>
      <p styleName="repos__detail">
        CLONE
        <a data-link={clone_url} onClick={event} >
          <span styleName="repos__detail-svg">
            <Img.Download />
          </span>
          URL
        </a>
        <a data-link={ssh_url} onClick={event} >
          <span styleName="repos__detail-svg">
            <Img.Download />
          </span>
           SSH
        </a>
      </p>
    </div>
  );

}