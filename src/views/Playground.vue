<script setup lang="ts">
import {
  Button,
  Card,
  Cell,
  Color,
  Container,
  Flexbox,
  Grid,
  Icon,
  Input,
  Link,
  Loader,
  Stack,
  Text,
  Toast,
} from "..";
</script>

<template>
  <div id="playground">
    <Toast label="toast" variant="success" />
    <Container>
      <Flexbox column>
        <Card title="titulo" subtitle="subtitulo" title-align="center">
          <Stack>
            <Button />
            <Icon name="face" />
          </Stack>
        </Card>
        <Card>
          <Grid>
            <Cell size="8">
              <Text />
            </Cell>
            <Cell size="4">
              <Color color="#f00" size="10" />
            </Cell>
          </Grid>
        </Card>
      </Flexbox>
    </Container>
  </div>
</template>
