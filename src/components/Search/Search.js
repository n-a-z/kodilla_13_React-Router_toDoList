import React from 'react';
import styles from './Search.scss';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import { settings } from '../../data/dataStore';
import Icon from '../Icon/Icon.js';
import Container from '../Container/Container.js';
import { withRouter } from 'react-router';

class Search extends React.Component {
  static propTypes = {
    text: PropTypes.string,
    searchString: PropTypes.string,
    changeSearchString: PropTypes.func,
    countVisible: PropTypes.number,
    countAll: PropTypes.number,
    history: PropTypes.string,
  };

  static defaultProps = {
    text: settings.search.defaultText,
  };

  state = {
    value: this.props.searchString,
  };

  handleChange(event) {
    this.setState({
      value: event.target.value,
      visibleButtons: event.target.value.length > 0,
    });
  }

  handleOK() {
    this.props.changeSearchString(this.state.value);
  }

  componentDidUpdate(prevProps) {
    if (this.props.searchString != prevProps.searchString) {
      this.setState({ value: this.props.searchString });
    }
  }

  render() {
    const { text, countVisible, countAll, history } = this.props;
    const { value } = this.state;
    const { icon } = settings.search;
    return (
      <Container>
        <div className={styles.component}>
          <input
            type='text'
            placeholder={text}
            value={value}
            onChange={(event) => this.handleChange(event)}
          />
          <div className={styles.buttons}>
            <Button
              onClick={() =>
                this.handleOK(
                  history.push(`/search/${this.state.value}`)
                )
              }
            >
              <Icon name={icon} />
            </Button>
          </div>
          <div>
            {countVisible == countAll ? '' : `${countVisible} / ${countAll}`}
          </div>
        </div>
      </Container>
    );
  }
}

export default withRouter(Search);
