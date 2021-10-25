import { DatasetAFE, DatasetAP, FeatureExtractor } from "bugfinder-framework";
export declare class FeatureExtractorNone implements FeatureExtractor {
    featureExtractorName: string;
    featureExtractorVersion: string;
    additionalDescription: string;
    extractFeatures(dataset: DatasetAP): Promise<DatasetAFE>;
}
