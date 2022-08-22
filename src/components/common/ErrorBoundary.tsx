import { Component, PropsWithChildren, ReactNode } from "react";

interface ErrorBoundaryProps {
  fallback?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  errorMsg: string | null;
}

export class ErrorBoundary extends Component<
  PropsWithChildren<ErrorBoundaryProps>,
  ErrorBoundaryState
> {
  state: ErrorBoundaryState = {
    hasError: false,
    errorMsg: null,
  };

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, errorMsg: error.message };
  }

  componentDidCatch(error: Error) {
    console.error("Uncaught error:", error.message);
  }

  render() {
    const { hasError, errorMsg } = this.state;
    const { fallback, children } = this.props;

    if (hasError) {
      if (fallback) return fallback;
      return <h3>Error : {errorMsg}</h3>;
    }

    return children;
  }
}
