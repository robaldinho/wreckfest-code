import * as React from 'react';
import {observer} from 'mobx-react';
import getStore from '../store/store';
import getSelectedBookId from '../selectors/getSelectedBookId';
import {addBookToCart} from '../actions/cart';

@observer
export default class Description extends React.Component<any, any> {
    render() {
        const store = getStore();
        const selectedBookId = getSelectedBookId();
        const book = selectedBookId !== null && store.books[selectedBookId];

        return (<div>
            {book ? book.description : 'Select a book to see description'}
            {selectedBookId && (
                <div>
                    <button onClick={() => addBookToCart(selectedBookId!)}>Add to Cart</button>
                </div>
            )}
        </div>);
    }
}