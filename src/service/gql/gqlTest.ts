import gql from 'graphql-tag';

export const getSiteRule = gql`
  query getSiteRule($in: SiteRuleType!) {
    getSiteRule(type: $in) {
      content
    }
  }
`;

export const uploadImage = gql`
  mutation uploadImage($file: Upload!, $in: CreateImageInput!) {
    uploadImage(file: $file, in: $in) {
      path
      type
    }
  }
`;
