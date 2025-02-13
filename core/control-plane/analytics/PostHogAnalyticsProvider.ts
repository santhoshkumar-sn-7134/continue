import { Analytics } from "@continuedev/config-types";

import {
  ControlPlaneProxyInfo,
  IAnalyticsProvider,
} from "./IAnalyticsProvider.js";

export default class PostHogAnalyticsProvider implements IAnalyticsProvider {
  client?: any;
  uniqueId?: string;

  async capture(
    event: string,
    properties: { [key: string]: any },
  ): Promise<void> {
    // Telemetry capture removed
  }

  async setup(
    config: Analytics,
    uniqueId: string,
    controlPlaneProxyInfo?: ControlPlaneProxyInfo,
  ): Promise<void> {
    // Telemetry setup removed
  }

  async shutdown(): Promise<void> {}
}
