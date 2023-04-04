import type { FC } from 'react';
import { Upload, Download, Link2 } from 'react-feather';

import type { Request } from 'utils';

import { Code } from '../Code';

interface SidebarProps {
  request: Request;
}

export const SidebarContent: FC<SidebarProps> = ({
  request: { requestHeaders, requestBody, responseBody, queryStringParameters, displayableUrl },
}) => (
  <>
    <div className="w-full border-t border-black">
      <h3 className="min-h-10 pl-8 py-2 flex items-center display-subheading text-white bg-grey-900">
        <Link2 className="p-1 mr-2 shrink-0" />
        <span className="break-words">{displayableUrl.replaceAll('/', '/​')}</span>
      </h3>
    </div>
    {queryStringParameters && (
      <div className="w-full border-t border-white">
        <h3 className="h-10 pl-8 flex items-center display-subheading uppercase text-white bg-grey-900">
          <Upload className="p-1 mr-2" />
          Query String Parameters
        </h3>
        <Code code={queryStringParameters} />
      </div>
    )}
    {requestHeaders.length > 0 && (
      <div className="w-full border-t border-black">
        <h3 className="h-10 pl-8 flex items-center display-subheading uppercase text-white bg-grey-900">
          <Upload className="p-1 mr-2" />
          Request Headers
        </h3>
        <Code code={requestHeaders} />
      </div>
    )}
    {requestBody && (
      <div className="w-full border-t border-black">
        <h3 className="h-10 pl-8 flex items-center display-subheading uppercase text-white bg-grey-900">
          <Upload className="p-1 mr-2" />
          Request Body
        </h3>
        <Code code={requestBody} />
      </div>
    )}
    {responseBody && (
      <div className="w-full border-t border-black">
        <h3 className="h-10 pl-8 flex items-center display-subheading uppercase text-white bg-grey-900">
          <Download className="p-1 mr-2" />
          Response Body
        </h3>
        <Code code={responseBody} />
      </div>
    )}
  </>
);
