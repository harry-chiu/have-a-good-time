import React from 'react';
import { Container, Wrapper, View, Image, WhiteSpace } from './style';

const Parallax = () => (
  <Container>
    <Wrapper>
      <View>
        <Image
          src="https://images.unsplash.com/photo-1514227973936-5bebfc160b59?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=676&q=80"
          alt=""
        />
      </View>
    </Wrapper>
    <WhiteSpace />
    <Wrapper>
      <View>
        <Image
          z={-1}
          src="https://images.unsplash.com/photo-1514227973936-5bebfc160b59?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=676&q=80"
          alt=""
        />
      </View>
      <View>
        <Image
          z={-2}
          src="https://images.unsplash.com/photo-1514227973936-5bebfc160b59?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=676&q=80"
          alt=""
        />
      </View>
    </Wrapper>
    <WhiteSpace />
    <Wrapper>
      <View>
        <Image
          z={-1}
          src="https://images.unsplash.com/photo-1514227973936-5bebfc160b59?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=676&q=80"
          alt=""
        />
      </View>
      <View>
        <Image
          z={-2}
          src="https://images.unsplash.com/photo-1514227973936-5bebfc160b59?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=676&q=80"
          alt=""
        />
      </View>
      <View>
        <Image
          z={-3}
          src="https://images.unsplash.com/photo-1514227973936-5bebfc160b59?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=676&q=80"
          alt=""
        />
      </View>
    </Wrapper>
    <WhiteSpace />
  </Container>
);

export default Parallax;
