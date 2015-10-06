import {assert} from 'chai';
import {renderComponent} from 'support/rendering';
import FixedLayout from 'components/layouts/FixedLayout';

describe('FixedLayout', () => {

  it('renders default', () => {
    let {props} = renderComponent(FixedLayout, {}, ['foo']);
    assert.deepEqual(props, {
      children: ['foo'],
      className: '',
      style: {
        width: '100%',
        display: 'table',
        borderSpacing: 16
      }
    });
  });

  it('renders custom className', () => {
    let {props} = renderComponent(FixedLayout, {className: 'Test'});
    assert.equal(props.className, 'Test');
  });

  it('renders custom spacing', () => {
    let {props} = renderComponent(FixedLayout, {spacing: 8});
    assert.equal(props.style.borderSpacing, 8);
  });
});
